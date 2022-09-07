import "./WarehouseTablet.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function WarehouseTablet() {
  //two columns

  return (
    <section className="warehouseTablet">
      <div className="warehouseTablet__wrapper">
        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__location">
            Manhattan <img src={chevron} alt="chevron right" />
          </h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">503 Broadwary</h2>
          <h2 className="warehouseTablet__info--info">New York, USA</h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__name">Parmin Aujla</h2>
        </div>

        <div className="warehouseTablet__info">
          <h2 className="warehouseTablet__info--info">+1(629)555-0129</h2>
          <h2 className="warehouseTablet__info--info">paujla@instock.com</h2>
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
