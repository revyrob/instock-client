import './WarehouseForm.scss';

export default function WarehouseForm(){
    return(
        <form className="frmgrid">
            <div className="frmgrid__body">
                <div className="frmgrid__left">
                    <p className="frmgrid__title">Warehouse Details</p>
                    <label className="frmgrid__lbl">
                        Warehouse Name
                        <input type="text" name="wrhs-name" className="frmgrid__inpt" />
                    </label>
                    <label className="frmgrid__lbl">
                        Street Address
                        <input type="text" name="wrhs-add" className="frmgrid__inpt" />
                    </label>
                    <label className="frmgrid__lbl">
                        City
                        <input type="text" name="wrhs-city" className="frmgrid__inpt" />
                    </label>
                    <label className="frmgrid__lbl">
                        Country
                        <input type="text" name="wrhs-country" className="frmgrid__inpt" />
                    </label>
                </div>
                <hr className='frmgrid__seprator' />
                <div className="frmgrid__right">
                    <p className="frmgrid__title">Contact Details</p>
                    <label className="frmgrid__lbl">
                        Contact Name
                        <input type="text" name="cntc-name" className="frmgrid__inpt" />
                    </label>
                    <label className="frmgrid__lbl">
                    Position
                        <input type="text" name="cntc-pos" className="frmgrid__inpt" />
                    </label>
                    <label className="frmgrid__lbl">
                    Phone Number
                        <input type="phone" name="cntc-phn" className="frmgrid__inpt" />
                    </label>
                    <label className="frmgrid__lbl">
                    Email
                        <input type="email" name="cntc-email" className="frmgrid__inpt" />
                    </label>
                </div>
            </div>
            <div className="frmgrid__footer">
                <button type="button" className='frmgrid__cancel'>Cancel</button>
                <button type="submit" className='frmgrid__save'>Save</button>
            </div>
        </form>
    )
}