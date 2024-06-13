const HeroSectionBottom = () => {
  return (
    <div className="hero_sec_bottom_main">
      <div className="hero_sec_bottom container">
        <div className="hero_sec_bottom_side_1">
          <h1 className="hero_sec_bottom_side_1_title">LAGOS HOTEL</h1>
          <p className="hero_sec_bottom_side_1_subtitle">
            Exceptional design and personalised service await
          </p>
        </div>
        <div className="hero_sec_bottom_side_2">
          <form action="" className="arrival_departure_form">
            <label className="arrival_departure_form_label">
              Arrival
              <input
                className="arrival_departure_form_label_input"
                type="date"
                name="arrival_date"
              />
            </label>
            <label className="arrival_departure_form_label">
              Departure{" "}
              <input
                className="arrival_departure_form_label_input"
                type="date"
                name="departure_date"
              />
            </label>
            <button className="arrival_departure_form_btn">BOOK A ROOM</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBottom;
