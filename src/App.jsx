import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Button, Row, Col, InputNumber, Modal } from "antd";
import { stats } from "./data/monsters.js";

import styles from "./App.css";
import "./helpers.css";
import MonsterModal from "./components/monster-modal/MonsterModal.jsx";
import MonsterCard from "./components/monster-card/MonsterCard.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      level: 0
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectMonsters = this.selectMonsters.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }
  openModal() {
    this.setState({ modalVisible: true });
  }
  closeModal() {
    this.setState({ modalVisible: false });
  }
  selectMonsters(monsters) {
    this.props.addMonsters(monsters);
  }
  removeMonster(monster) {
    Modal.confirm({
      title: `Are you sure you want to remove ${monster}?`,
      okType: "danger",
      onOk: () => {
        this.props.removeMonster(monster);
      }
    });
  }
  changeLevel(level) {
    if (level !== 0 && !level) {
      return;
    }
    this.setState({ level });
  }
  render() {
    return (
      <div className={styles.AppContainer}>
        <Button
          disabled={!this.props.hasHistory}
          className={styles.undo}
          shape="circle"
          icon="rollback"
          onClick={this.props.undo}
        />
        <Button
          disabled={!this.props.hasFuture}
          className={styles.redo}
          shape="circle"
          icon="rollback"
          onClick={this.props.redo}
        />
        <Row justify="center" type="flex" gutter={5} className={styles.topRows}>
          <Col>
            Scenario Level:{" "}
            <InputNumber
              defaultValue={this.state.level}
              min={0}
              max={7}
              onChange={this.changeLevel}
            />
          </Col>
        </Row>
        <Row justify="center" type="flex" gutter={5} className={styles.topRows}>
          <Col>
            <Button onClick={this.openModal}>Add Monster</Button>
          </Col>
        </Row>
        {this.props.monsters.map((monster, index) => {
          const monsterInfo = stats.monsters[monster];
          return (
            <Row>
              <MonsterCard
                name={monster}
                stats={monsterInfo.level[this.state.level].normal}
                eliteStats={monsterInfo.level[this.state.level].elite}
                image={monsterInfo.image}
                removeMonster={() => this.removeMonster(monster)}
                instances={this.props.monsterInstances[monster]}
                addInstance={this.props.addInstance}
                removeInstance={this.props.removeInstance}
                editInstance={this.props.editInstance}
                damageInstance={this.props.damageInstance}
                addStatus={this.props.addStatus}
                removeStatus={this.props.removeStatus}
              />
            </Row>
          );
        })}
        {this.state.modalVisible ? (
          <MonsterModal
            destroyOnClose={true}
            visible={this.state.modalVisible}
            closeModal={this.closeModal}
            selectMonsters={monsters => {
              this.selectMonsters(monsters);
              this.closeModal();
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default hot(module)(App);
