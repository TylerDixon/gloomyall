import React, { Component } from "react";
import { Badge, Button, Input, Row, Col } from "antd";
import styles from "./styles.css";
import ImobilizeImage from "../../images/immobilize.svg";
import InvisibilityImage from "../../images/invisibility.svg";
import PoisonImage from "../../images/poison.svg";
import WoundImage from "../../images/wound.svg";
import DisarmImage from "../../images/disarm.svg";
import MuddleImage from "../../images/muddle.svg";
import StrengthenImage from "../../images/strengthen.svg";
const ButtonGroup = Button.Group;

const imageStatusMap = {
  invisibility: InvisibilityImage,
  imobilize: ImobilizeImage,
  poison: PoisonImage,
  wound: WoundImage,
  disarm: DisarmImage,
  muddle: MuddleImage,
  strengthen: StrengthenImage
};

class MonsterHealth extends Component {
  desaturate(status) {
    if (this.props.statuses.indexOf(status) === -1) return styles.desaturate;
    return "";
  }

  render() {
    const { isElite } = this.props;
    return (
      <Row type="flex" align="middle" gutter={16} className={styles.main}>
        <Col>
          <button
            className={styles.unstyled}
            onClick={() => this.props.editMonster()}
          >
            <Badge status={isElite ? "warning" : "default"}>
              <div className={styles.icon}>{this.props.number}</div>
            </Badge>
          </button>
        </Col>
        <Col>
          <ButtonGroup compact="true" className={styles.buttonGroup}>
            <Button
              className={styles.leftButton}
              onClick={() => this.props.manipDamage(-1)}
            >
              +
            </Button>
            <Input
              className={styles.centerInput}
              value={this.props.stats.health - this.props.damage}
            />
            <Button
              className={styles.rightButton}
              onClick={() => this.props.manipDamage(1)}
            >
              -
            </Button>
          </ButtonGroup>
        </Col>
        {Object.keys(imageStatusMap).map(status => {
          return (
            <Col>
              <img
                alt={"Icon for status " + status}
                className={styles.statusImage + " " + this.desaturate(status)}
                onClick={() => this.props.toggleStatus(status)}
                src={imageStatusMap[status]}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default MonsterHealth;
