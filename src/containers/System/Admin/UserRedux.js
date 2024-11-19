import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './UserRedux.scss';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',
        };
    }

    async componentDidMount() {
        const { getGenderStart, getPositionStart, getRoleStart } = this.props;
        getGenderStart();
        getPositionStart();
        getRoleStart();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender:
                    arrGenders && arrGenders.length > 0
                        ? arrGenders[0].key
                        : '',
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position:
                    arrPositions && arrPositions.length > 0
                        ? arrPositions[0].key
                        : '',
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
            });
        }
    }

    handleOnChangeImage = (event) => {
        let file = event.target.files[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar: file,
            });
        }
    };

    openPreviewImage = () => {
        if (!this.state.previewImgURL) return;
        this.setState({ isOpen: true });
    };

    handleSaveUser = () => {
        let isvalid = this.checkValidateInput();
        if (isvalid === false) return;
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
        });
    };

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({ ...copyState });
    };

    checkValidateInput = () => {
        let isvalid = true;
        let arrCheck = [
            'email',
            'password',
            'firstName',
            'lastName',
            'phoneNumber',
            'address',
        ];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isvalid = false;
                alert('This input is required: ' + arrCheck[i]);
                break;
            }
        }
        return isvalid;
    };

    render() {
        let {
            genderArr: genders,
            positionArr: positions,
            roleArr: roles,
        } = this.state;

        let {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            gender,
            position,
            role,
            avatar,
        } = this.state;

        let language = this.props.language;
        return (
            <div className='user-redux-container'>
                <div className='title'>React-Redux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'>
                                <FormattedMessage id='manage-user.add' />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.email' />
                                </label>
                                <input
                                    className='form-control'
                                    type='email'
                                    value={email}
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'email')
                                    }
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.password' />
                                </label>
                                <input
                                    className='form-control'
                                    type='password'
                                    value={password}
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'password')
                                    }
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.first-name' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={firstName}
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'firstName')
                                    }
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.last-name' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={lastName}
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'lastName')
                                    }
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.phone-number' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={phoneNumber}
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'phoneNumber')
                                    }
                                />
                            </div>
                            <div className='col-9'>
                                <label>
                                    <FormattedMessage id='manage-user.address' />
                                </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={address}
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'address')
                                    }
                                />
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.gender' />
                                </label>
                                <select
                                    className='form-control'
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'gender')
                                    }
                                >
                                    {genders &&
                                        genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.position' />
                                </label>
                                <select
                                    className='form-control'
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'position')
                                    }
                                >
                                    {positions &&
                                        positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.role' />
                                </label>
                                <select
                                    className='form-control'
                                    onChange={(event) =>
                                        this.onChangeInput(event, 'role')
                                    }
                                >
                                    {roles &&
                                        roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI
                                                        ? item.valueVi
                                                        : item.valueEn}
                                                </option>
                                            );
                                        })}
                                </select>
                            </div>
                            <div className='col-3'>
                                <label>
                                    <FormattedMessage id='manage-user.image' />
                                </label>
                                <div className='preview-img-container'>
                                    <input
                                        id='previewImg'
                                        type='file'
                                        hidden
                                        onChange={(event) =>
                                            this.handleOnChangeImage(event)
                                        }
                                    />
                                    <label
                                        className='label-upload'
                                        htmlFor='previewImg'
                                    >
                                        Tải ảnh
                                        <i className='fas fa-upload'></i>
                                    </label>
                                    <div
                                        className='preview-image'
                                        style={{
                                            backgroundImage: `url(${this.state.previewImgURL})`,
                                        }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => this.handleSaveUser()}
                                >
                                    <FormattedMessage id='manage-user.save' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true && (
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
