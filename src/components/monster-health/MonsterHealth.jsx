import React, { Component } from "react";
import { Badge, Button, Input, Row, Col, Modal } from "antd";
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

  manipDamage(damage) {
    const statuses = this.props.statuses;
    const isPoisoned = statuses.indexOf("poison") > -1;
    const isWounded = statuses.indexOf("wound") > -1;
    if (damage < 0) {
      if (isPoisoned && isWounded) {
        return Modal.confirm({
          title: `You are about to heal the monster, would you rather remove poison and wound instead?`,
          okType: "danger",
          cancelText: "No",
          okText: "Yes",
          onOk: () => {
            this.props.toggleStatus("poison");
            this.props.toggleStatus("wound");
          },
          onCancel: () =>
            this.props.damage === 0 && damage < 0
              ? this.showUnableToHealModal()
              : this.props.manipDamage(damage)
        });
      }
      if (isPoisoned) {
        return Modal.confirm({
          title: `You are about to heal the monster, would you rather remove poison?`,
          okType: "danger",
          cancelText: "No",
          okText: "Yes",
          onOk: () => this.props.toggleStatus("poison"),
          onCancel: () =>
            this.props.damage === 0 && damage < 0
              ? this.showUnableToHealModal()
              : this.props.manipDamage(damage)
        });
      } else if (isWounded) {
        return Modal.confirm({
          title: `You are about to heal the monster, would you like to remove the wound as well?`,
          okType: "danger",
          cancelText: "No",
          okText: "Yes",
          onOk: () => {
            this.props.toggleStatus("wound");
            this.props.manipDamage(damage);
          },
          onCancel: () =>
            this.props.damage === 0 && damage < 0
              ? this.showUnableToHealModal()
              : this.props.manipDamage(damage)
        });
      }
    }
    if (this.props.damage === 0 && damage < 0) {
      this.showUnableToHealModal();
      return;
    }
    this.props.manipDamage(damage);
  }

  confirmModal(status, damage) {}

  showUnableToHealModal() {
    Modal.error({
      title: "Can't heal monster",
      content: "This monster is already at full health"
    });
  }

  render() {
    const { isElite, statuses } = this.props;
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
            {this.props.damage === 0 &&
            statuses.indexOf("poison") === -1 &&
            statuses.indexOf("wound") === -1 ? (
              /* Instead of actually disabling, style it disabled so we can show the error alert. */
              <Button
                className={styles.disabled + " " + styles.leftButton}
                onClick={() => this.manipDamage(-1)}
              >
                +
              </Button>
            ) : (
              <Button
                className={styles.leftButton}
                onClick={() => this.manipDamage(-1)}
              >
                +
              </Button>
            )}

            <Input
              className={styles.centerInput}
              value={this.props.stats.health - this.props.damage}
              readOnly
            />
            <Button
              className={styles.rightButton}
              onClick={() => this.manipDamage(1)}
            >
              -
            </Button>
          </ButtonGroup>
        </Col>
        {Object.keys(imageStatusMap).map(status => {
          return (
            <Col key={status}>
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
