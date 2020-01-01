import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'
import './style/common.less'

export default class Admin extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={21} className="main">
                    <Header>
                        Header
                    </Header>
                    <Row className="content">
                        <Home />
                        {/* {this.props.children} */}
                    </Row>
                    <Footer>
                        Footer
                    </Footer>
                </Col>
            </Row>
        );
    }
}