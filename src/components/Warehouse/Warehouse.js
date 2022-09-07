import "./Warehouse.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function Warehouse() {
  //two columns

  return (
    <section className="warehouse">
      <div className="warehouse__div">
        <h2 className="warehouse__title">Warehouse</h2>

        <h2 className="warehouse__location">
          Manhattan <img src={chevron} alt="chevron right" />
        </h2>

        <h2 className="warehouse__title">Address</h2>
        <h2 className="warehouse__info">503 Broadwary, New York, USA</h2>

        <div className="warehouse_icon">
          <img src={delteCan} alt="garbage can" />
        </div>
      </div>
      <div className="warehouse__div">
        <h2 className="warehouse__name">Parmin Aujla</h2>

        <h2 className="warehouse__location">
          Manhattan <img src={chevron} alt="chevron right" />
        </h2>

        <h2 className="warehouse__title">Contact Information</h2>
        <h2 className="warehouse__info">+1(629)555-0129 paujla@instock.com</h2>

        <div className="warehouse_icon">
          <img src={editPen} alt="pen" />
        </div>
      </div>
    </section>
  );
}
export default Warehouse;
