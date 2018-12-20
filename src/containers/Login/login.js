import React, { Component } from 'react';
import { Icon, Input } from 'antd';


class Index extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        userName: '',

        isShowHead: false,
        startTop: 0,
        status: false,
        contentTop: 0,
        listTop: 0,
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,
    }


    componentDidMount() {




    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div className="login">
                <div className="bg">
                    <div className="login-main">
                        <div className="logo">COPELL</div>
                        <p className="comp-desc">
                            - INTELLIGENT TALENT MATCHING -
                        </p>
                        <div className="input-list">
                            <Input
                                className="login-input"
                                placeholder="Enter your username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                            />
                            <Input
                                className="login-input"
                                placeholder="Enter your username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                            />
                            <Input
                                className="login-input"
                                placeholder="Enter your username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={suffix}
                                value={userName}
                                onChange={this.onChangeUserName}
                                ref={node => this.userNameInput = node}
                            />
                        </div>
                        <div className="l-botton">
                            登录
                        </div>
                        <p className="is-login">
                            已有账号？直接<label>登录</label>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Index