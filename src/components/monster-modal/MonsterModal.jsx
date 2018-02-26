import React, { Component } from "react";
import { Modal, Select, Row, Button } from "antd";

import { stats, getMonsterAtLevel } from "../../data/monsters";
const Option = Select.Option;

class MonsterModal extends Component {
  constructor() {
    super();
    this.state = {
      selectedMonsters: [""]
    };
  }

  selectMonster(selected, index) {
    var selectedMonsters = this.state.selectedMonsters;
    this.setState({
      selectedMonsters: selectedMonsters
        .slice(0, index)
        .concat(selected)
        .concat(selectedMonsters.slice(index + 1))
    });
  }

  addMonsterSelection() {
    this.setState({
      selectedMonsters: this.state.selectedMonsters.concat("")
    });
  }

  returnMonsters() {
    return this.state.selectedMonsters.map(monsterName => {
      var monster = stats.monsters[monsterName];
      monster.name = monsterName;
      return monster;
    });
  }

  render() {
    return (
      <Modal
        title="Select a Monster"
        visible={this.props.visible}
        onOk={() => this.props.selectMonsters(this.returnMonsters())}
        onCancel={this.props.closeModal}
      >
        {this.state.selectedMonsters.map((monster, index) => {
          return (
            <Row>
              <Select
                defaultValue={monster}
                onChange={selected => this.selectMonster(selected, index)}
                style={{ width: 300 }}
              >
                {Object.keys(stats.monsters).map(key => {
                  return <Option value={key}>{key}</Option>;
                })}
              </Select>
            </Row>
          );
        })}
        <Row>
          <Button onClick={() => this.addMonsterSelection()}>+</Button>
        </Row>
      </Modal>
    );
  }
}

export default MonsterModal;
