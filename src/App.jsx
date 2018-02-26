import React, { Component } from "react";
import { Button, Row, Col, InputNumber, Modal } from "antd";

import styles from "./App.css";
import helpers from "./helpers.css";
import MonsterModal from "./components/monster-modal/MonsterModal.jsx";
import MonsterCard from "./components/monster-card/MonsterCard.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      monsters: [],
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
    this.setState({ monsters: this.state.monsters.concat(monsters) });
  }
  removeMonster(index) {
    const monsters = this.state.monsters;
    Modal.confirm({
      title: `Are you sure you want to remove ${
        this.state.monsters[index].name
      }?`,
      okType: "danger",
      onOk: () => {
        this.setState({
          monsters: monsters.slice(0, index).concat(monsters.slice(index + 1))
        });
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
        {this.state.monsters.map((monster, index) => {
          return (
            <Row>
              <MonsterCard
                name={monster.name}
                stats={monster.level[this.state.level].normal}
                eliteStats={monster.level[this.state.level].elite}
                image={monster.image}
                removeMonster={() => this.removeMonster(index)}
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

export default App;
