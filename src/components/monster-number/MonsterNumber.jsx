import React, { Component } from "react";
import { Modal, Switch } from "antd";
import styles from "./styles.css";

class MonsterNumber extends Component {
  constructor(props) {
    super(props);
    var selectedNumber = 1;
    while (
      props.selectedNumber === undefined &&
      props.unavailableNumbers.indexOf(selectedNumber) !== -1
    ) {
      selectedNumber++;
    }
    this.state = {
      selectedNumber: props.selectedNumber || selectedNumber,
      isElite: props.isElite
    };
  }
  changeNumber(number) {
    this.setState({ selectedNumber: number });
  }
  toggleElite(isElite) {
    this.setState({ isElite });
  }
  render() {
    return (
      <Modal
        title={"Monster Info"}
        visible={true}
        onOk={() =>
          this.props.saveMonster(this.state.selectedNumber, this.state.isElite)
        }
        onCancel={() => this.props.close()}
      >
        <div className={styles.numbers}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => {
            const isUnavailable =
              this.props.unavailableNumbers.indexOf(number) > -1;
            return (
              <div
                key={number}
                className={
                  styles.number +
                  " " +
                  (this.state.selectedNumber === number
                    ? styles.selected
                    : "") +
                  " " +
                  (isUnavailable ? styles.unavailable : "")
                }
                onClick={() => (isUnavailable ? "" : this.changeNumber(number))}
              >
                {number}
              </div>
            );
          })}
        </div>
        <Switch
          defaultChecked={this.state.isElite}
          onChange={this.toggleElite.bind(this)}
        />{" "}
        Is Elite Creature?
      </Modal>
    );
  }
}

export default MonsterNumber;
