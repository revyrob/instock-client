import "./WarehouseMobile.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import delteCan from "../../assets/icons/delete_outline-24px.svg";
import editPen from "../../assets/icons/edit-24px.svg";
import Modal from "react-modal";
import { useState } from "react";
import Button from "../Button/Button";

//use the onclick function in the article component and not ArticleList because the articles are the onclick events
function WarehouseMobile({
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
    <section className="warehouse">
      <div className="warehouse__wrapper">
        <div className="warehouse__div">
          <h2 className="warehouse__title">Warehouse</h2>

          <h2 className="warehouse__location">
            {warehouse} <img src={chevron} alt="chevron right" />
          </h2>

          <h2 className="warehouse__title">Address</h2>
          <h2 className="warehouse__info">
            {address}, {city}, {country}
          </h2>

          <div className="warehouse__icon" onClick={openModal}>
            <img src={delteCan} alt="garbage can" />
          </div>

          <Modal
            isOpen={deleteModal}
            className="warehouse__modal"
            onRequestClose={closeModal}
            contentLabel="Delete Warehouse"
          >
            <h2 className="warehouse__modal--title">
              Delete {warehouse} warehouse?
            </h2>
            <p className="warehouse__modal--text">
              Please confirm that you'd like to delete the {warehouse} from the
              list of warehouses. You won't be able to undo this action.
            </p>
            <Button
              className="warehouse__modalbBtn--cancel"
              text="Cancel"
              type="close"
              onClick={closeModal}
            ></Button>
            <Button
              className="warehouse__modalbBtn--delete"
              text="Delete"
              type="delete"
              onClick=""
            ></Button>
          </Modal>
        </div>
        <div className="warehouse__div">
          <h2 className="warehouse__title">Contact Name</h2>
          <h2 className="warehouse__name">{contact}</h2>

          <h2 className="warehouse__title">Contact Information</h2>
          <h2 className="warehouse__info">
            {contactPhone} {contactEmail}
          </h2>

          <div className="warehouse__icon">
            <img src={editPen} alt="pen" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default WarehouseMobile;
