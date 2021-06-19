import React from 'react';
import InputForm from "../../components/InputForm/";
import Filter from "../../components/Filter";
import PbookList from "../../components/PbookList";

const ContactsView = () => {
    return (
      <div className="container">
            <h1>PhoneBook / home</h1>
            <InputForm />
            <Filter />
            <PbookList />
      </div>
    );
}

export default ContactsView;