import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import {
    addDonation
} from '../../actions/donations';
import { InputText } from 'primereact/inputtext';







const Donate = (props) => {
    let donation = {
      name: '',
      location: '',
      email: '',
      phone_number: '',
    }


    const [record, setRecord]  = useState(donation)

    const saveItem = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.addDonation(_record)
        }
        props.hardcopyDialog(false)
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    return (
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-12">
            <label htmlFor="righticon">NAME</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="name"
                    name="name"
                    value={record.name}
                    onChange={(e) => onInputChange(e, 'name')}
                />

            </span>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <label htmlFor="righticon">LOCATION</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="location"
                    name="location"
                    value={record.location}
                    onChange={(e) => onInputChange(e, 'location')}
                />

            </span>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <label htmlFor="righticon">EMAIL</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="email"
                    name="email"
                    value={record.email}
                    onChange={(e) => onInputChange(e, 'email')}
                />

            </span>
          </div>
          <div className="p-field p-col-12 p-md-12">
            <label htmlFor="righticon">PHONE NUMBER</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="phone_number"
                    name="phone_number"
                    value={record.phone_number}
                    onChange={(e) => onInputChange(e, 'phone_number')}
                />

            </span>
          </div>
          <div className="p-field p-col-12 p-md-6">
            <Button className="p-button-warning" label='SUBMIT' onClick={saveItem}/>
          </div>


        </div>
    );
}

const mapStateToProps = state =>({
    records: state.memberships.memberships,
})

export default connect(
  mapStateToProps,
  {addDonation} )
  (Donate);
