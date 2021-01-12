import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Rooms from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Rooms key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Habitaciones destacadas" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
