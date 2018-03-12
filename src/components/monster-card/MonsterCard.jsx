import React, { Component } from "react";
import { Modal, Card, Row, Col, Button } from "antd";
import styles from "./styles.css";
import MonsterHealth from "../monster-health/MonsterHealth.jsx";
import MonsterNumber from "../monster-number/MonsterNumber.jsx";
import MoveImage from "../../images/move.svg";
import AttackImage from "../../images/attack.svg";
import HealthImage from "../../images/heal.svg";
import RangeImage from "../../images/range.svg";

class MonsterCard extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ damage: 0, statuses: [], number: 1 }],
      updatingMonster: undefined
    };
  }
  openMonsterEditNumber(index) {
    this.setState({ updatingMonster: index });
  }
  openMonsterModalNumber(isNewMonster) {
    this.setState({ showMonsterNumberModal: true });
  }
  closeMonsterNumberModal() {
    this.setState({
      updatingMonster: undefined,
      showMonsterNumberModal: false
    });
  }
  newMonster(number, isElite) {
    this.props.addInstance(this.props.name, number, isElite);
    this.setState({
      showMonsterNumberModal: false
    });
  }
  editMonster(number, isElite, index) {
    this.props.editInstance(this.props.name, index, isElite, number);
    this.setState({ updatingMonster: undefined });
  }
  destroyMonster(index) {
    var monsters = this.state.monsters;
    monsters = monsters.slice(0, index).concat(monsters.slice(index + 1));
    this.setState({
      monsters,
      monsterToKill: undefined
    });
  }
  toggleStatus(status, index) {
    var shouldRemove =
      this.props.instances[index].statuses.indexOf(status) > -1;
    if (shouldRemove) {
      this.props.removeStatus(this.props.name, index, status);
    } else {
      this.props.addStatus(this.props.name, index, status);
    }
  }
  manipDamage(num, index) {
    var currMonster = this.props.instances[index];
    var health = currMonster.isElite
      ? this.props.eliteStats.health
      : this.props.stats.health;

    if (health === currMonster.damage + num) {
      Modal.confirm({
        title: `Kill #${currMonster.number}?`,
        cancelText: "No",
        okText: "Kill!",
        onOk: () => {
          this.props.removeInstance(this.props.name, index);
        }
      });
    } else {
      this.props.damageInstance(this.props.name, index, num);
    }
  }
  render() {
    const { name, stats, eliteStats } = this.props;
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
              alt={"Image for " + name}
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
              {this.props.instances.map((monster, index) => {
                return (
                  <MonsterHealth
                    stats={monster.isElite ? eliteStats : stats}
                    number={monster.number}
                    isElite={monster.isElite}
                    editMonster={() => this.openMonsterEditNumber(index)}
                    damage={monster.damage}
                    statuses={monster.statuses}
                    toggleStatus={status => this.toggleStatus(status, index)}
                    manipDamage={damage => this.manipDamage(damage, index)}
                  />
                );
              })}
            </Row>
            <Row>
              <Button onClick={() => this.openMonsterModalNumber(true)}>
                Add Monster
              </Button>
            </Row>
          </Col>
        </Row>
        {this.state.showMonsterNumberModal ? (
          <MonsterNumber
            unavailableNumbers={this.props.instances.map(
              monster => monster.number
            )}
            saveMonster={(number, isElite) => this.newMonster(number, isElite)}
          />
        ) : (
          ""
        )}
        {this.state.updatingMonster !== undefined ? (
          <MonsterNumber
            selectedNumber={
              this.props.instances[this.state.updatingMonster].number
            }
            unavailableNumbers={this.props.instances
              .map(monster => monster.number)
              .filter(
                number =>
                  number !==
                  this.props.instances[this.state.updatingMonster].number
              )}
            saveMonster={(number, isElite) =>
              this.editMonster(number, isElite, this.state.updatingMonster)
            }
            isElite={this.props.instances[this.state.updatingMonster].isElite}
            close={() => this.closeMonsterNumberModal()}
          />
        ) : (
          ""
        )}
      </Card>
    );
  }
}

var stat = (image, stat, eliteStat) => {
  return (
    <Row type="flex" align="middle" gutter={30} className={styles.statRow}>
      <Col>
        <img alt={"Icon for stat"} className={styles.icon} src={image} />
      </Col>
      <Col>{stat}</Col>
      <Col className={styles.eliteStat}>{eliteStat}</Col>
    </Row>
  );
};
export default MonsterCard;
