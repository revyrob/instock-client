import "./WarehouseTablet.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";
import Modal from "react-modal";
import { useState } from "react";

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

  //modal functions
  //state for modal
  const [deleteModal, setDeleteModal] = useState(false);

  function openModal() {
    setDeleteModal(true);
  }

  function closeModal() {
    setDeleteModal(false);
  }

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
            <img src={delteCan} alt="garbage can" onClick={openModal} />
            <Modal
              isOpen={deleteModal}
              className="warehouseTablet__element"
              onRequestClose={closeModal}
              contentLabel="Delete Warehouse"
            >
              <div className="warehouseTablet__modal">
                <div className="warehouseTablet__modal--textarea">
                  <h2 className="warehouseTablet__modal--title">
                    Delete {warehouse} warehouse?
                  </h2>
                  <p className="warehouseTablet__modal--text">
                    Please confirm that you'd like to delete the {warehouse}{" "}
                    from the list of warehouses. You won't be able to undo this
                    action.
                  </p>
                </div>
                <div className="warehouseTablet__modal--div">
                  <button
                    className="warehouseTablet__modal--btn warehouseTablet__modal--btn--cancel"
                    type="cancel"
                    onClick={closeModal}
                  >
                    <span className="btn-text">Cancel</span>
                  </button>

                  <button
                    className="warehouseTablet__modal--btn warehouseTablet__modal--btn--delete"
                    type="delete"
                    onClick=""
                  >
                    <span className="btn-text">Delete</span>
                  </button>
                </div>
              </div>
            </Modal>

            <img src={editPen} alt="pen" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WarehouseTablet;
