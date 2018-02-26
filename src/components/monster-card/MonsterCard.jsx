import React, { Component } from "react";
import { Modal, Card, Row, Col, Button, Icon } from "antd";
import styles from "./styles.css";
import MonsterHealth from "../monster-health/MonsterHealth.jsx";
import MoveImage from "../../images/move.svg";
import AttackImage from "../../images/attack.svg";
import HealthImage from "../../images/heal.svg";
import RangeImage from "../../images/range.svg";

class MonsterCard extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ damage: 0, statuses: [], number: 1 }]
    };
  }
  addMonster() {
    var numbersUsed = this.state.monsters.map(monster => monster.number);
    var numberToUse;
    numbersUsed.sort();
    var useCalculatedNumber = numbersUsed.some((number, index) => {
      numberToUse = index + 1;
      return number > index + 1;
    });
    numberToUse = useCalculatedNumber ? numberToUse : numbersUsed.length + 1;
    this.setState({
      monsters: this.state.monsters.concat({
        damage: 0,
        statuses: [],
        number: numberToUse
      })
    });
  }
  destroyMonster(index) {
    var monsters = this.state.monsters;
    monsters = monsters.slice(0, index).concat(monsters.slice(index + 1));
    this.setState({
      monsters,
      monsterToKill: undefined
    });
  }
  toggleElite(index) {
    this.state.monsters[index].isElite = !this.state.monsters[index].isElite;
    this.setState({ monsters: this.state.monsters });
  }
  toggleStatus(status, index) {
    var monsters = this.state.monsters;
    var statusMonster = monsters[index];
    var statusIndex = statusMonster.statuses.indexOf(status);
    if (statusIndex > -1) {
      const statuses = statusMonster.statuses;
      statusMonster.statuses = statuses
        .slice(0, statusIndex)
        .concat(monsters.slice(statusIndex + 1));
    } else {
      statusMonster.statuses.push(status);
    }
    this.setState({ monsters });
  }
  manipDamage(num, index) {
    var monsters = this.state.monsters;
    var damagedMonster = monsters[index];
    damagedMonster.damage += num;
    monsters = monsters
      .slice(0, index)
      .concat(damagedMonster)
      .concat(monsters.slice(index + 1));

    var newState = { monsters };
    if (this.props.stats.health === damagedMonster.damage) {
      Modal.confirm({
        title: `Kill #${damagedMonster.number}?`,
        cancelText: "No",
        okText: "Kill!",
        onOk: () => {
          this.destroyMonster(index);
        },
        onCancel: () => {
          this.manipDamage(-1, index);
        }
      });
      /* newState.monsterToKill = index;*/
    } else {
      newState.monsterToKill = undefined;
    }

    this.setState(newState);
  }
  render() {
    const { name, stats, eliteStats } = this.props;
    const hasTen = stats.hasTen;
    const title = (
      <Row type="flex" justify="space-between">
        <Col>{name}</Col>
        <Col push="1">
          <Button
            shape="circle"
            icon="close"
            onClick={this.props.removeMonster}
          />
        </Col>
      </Row>
    );
    return (
      <Card title={title}>
        <Row type="flex" gutter="25">
          <Col>
            <img
              src={require("../../images/" + this.props.image)}
              className={styles.monsterImage}
            />
          </Col>
          <Col>
            {stat(HealthImage, stats.health, eliteStats.health)}
            {stat(AttackImage, stats.attack, eliteStats.attack)}
            {stat(MoveImage, stats.move, eliteStats.move)}
            {stat(RangeImage, stats.range, eliteStats.range)}
          </Col>
          <Col>
            <Row>
              {this.state.monsters.map((monster, index) => {
                return (
                  <MonsterHealth
                    stats={monster.isElite ? eliteStats : stats}
                    number={monster.number}
                    isElite={monster.isElite}
                    toggleElite={() => this.toggleElite(index)}
                    damage={monster.damage}
                    statuses={monster.statuses}
                    toggleStatus={status => this.toggleStatus(status, index)}
                    manipDamage={damage => this.manipDamage(damage, index)}
                  />
                );
              })}
            </Row>
            <Row>
              <Button onClick={() => this.addMonster()}>Add Monster</Button>
            </Row>
          </Col>
        </Row>
        <Modal
          title={"Destroy " + name}
          visible={this.state.monsterToKill !== undefined}
          cancelText="No"
          okText="Kill monster"
          onOk={() => this.destroyMonster(this.state.monsterToKill)}
          onCancel={() => this.manipDamage(-1, this.state.monsterToKill)}
        />
      </Card>
    );
  }
}

var stat = (image, stat, eliteStat) => {
  return (
    <Row type="flex" align="middle" gutter={30} className={styles.statRow}>
      <Col>
        <img className={styles.icon} src={image} />
      </Col>
      <Col>{stat}</Col>
      <Col className={styles.eliteStat}>{eliteStat}</Col>
    </Row>
  );
};
export default MonsterCard;
