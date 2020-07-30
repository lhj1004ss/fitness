import React, { Component } from "react";
import {
  GiWeightLiftingUp,
  GiWeightLiftingDown,
  GiLegArmor,
} from "react-icons/gi";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import Title from "../components/Title";

export default class Service extends Component {
  state = {
    service: [
      {
        icon: <GiWeightLiftingUp />,
        title: "Bench Press",
        detail: "Chest Workout",
        link: (
          <Link to="/benchpress">
            <AiOutlineLink />
          </Link>
        ),
      },
      {
        icon: <GiWeightLiftingDown />,
        title: "Dead Lift",
        detail: "Leg and Back Workout",
        link: (
          <Link to="/deadlift">
            <AiOutlineLink />
          </Link>
        ),
      },
      {
        icon: <GiLegArmor />,
        title: "Squat",
        detail: "Front and Bag Leg Workout",
        link: (
          <Link to="/squat">
            <AiOutlineLink />
          </Link>
        ),
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title className="title" title="service" />
        <div className="service-center">
          {this.state.service.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.detail}</p>
                <a>{item.link}</a>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
