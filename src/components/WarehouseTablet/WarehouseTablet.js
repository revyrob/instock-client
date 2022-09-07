import "./WarehouseTablet.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function WarehouseTablet({
  warehouse,
  address,
  contact,
  contactPhone,
  contactEmail,
  city,
  country,
}) {
  //two columns

  return (
    <section className="warehouseTablet">
      <div className="warehouseTablet__wrapper">
        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__location">
            {warehouse} <img src={chevron} alt="chevron right" />
          </h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">{address}</h2>
          <h2 className="warehouseTablet__info--info">
            {city}, {country}
          </h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__name">{contact}</h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">{contactPhone}</h2>
          <h2 className="warehouseTablet__info--info">{contactEmail}</h2>
        </div>

        <div className="warehouseTablet__info">
          <div className="warehouseTablet__icon--tablet">
            <img src={delteCan} alt="garbage can" />
            <img src={editPen} alt="pen" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WarehouseTablet;
