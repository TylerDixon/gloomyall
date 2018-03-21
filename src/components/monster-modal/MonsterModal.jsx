import React, { Component } from "react";
import { Modal, Select, Row, Button, Col } from "antd";

import { stats } from "../../data/monsters";
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

  removeMonster(index) {
    var selectedMonsters = this.state.selectedMonsters;
    this.setState({
      selectedMonsters: selectedMonsters
        .slice(0, index)
        .concat(selectedMonsters.slice(index + 1))
    });
  }
  addMonsterSelection() {
    this.setState({
      selectedMonsters: this.state.selectedMonsters.concat("")
    });
  }

  returnMonsters() {
    return this.state.selectedMonsters.filter(monster => monster !== "");
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
            <Row
              key={monster}
              className="mar-top-5"
              type="flex"
              justify="start"
              gutter={10}
            >
              <Col>
                <Select
                  value={monster}
                  onChange={selected => this.selectMonster(selected, index)}
                  style={{ width: 300 }}
                >
                  {Object.keys(stats.monsters).map(key => {
                    return (
                      <Option
                        key={key}
                        value={key}
                        disabled={
                          this.props.currentMonsters.indexOf(key) > -1 ||
                          this.state.selectedMonsters.indexOf(key) > -1
                        }
                      >
                        {key}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
              <Col>
                <Button
                  icon="close"
                  onClick={() => this.removeMonster(index)}
                />
              </Col>
            </Row>
          );
        })}
        <Row className="mar-top-15">
          <Button onClick={() => this.addMonsterSelection()}>+</Button>
        </Row>
      </Modal>
    );
  }
}

export default MonsterModal;
