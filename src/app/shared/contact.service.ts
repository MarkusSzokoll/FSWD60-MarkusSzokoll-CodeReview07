import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public firebase: AngularFireDatabase) { }
  	contactList: AngularFireList<any>;

	form = new FormGroup({
    	$key: new FormControl(null),
    	firstName: new FormControl('', Validators.required),
    	lastName: new FormControl('', Validators.required),
    	mobile: new FormControl('', Validators.required)
	});

	getContact(){
        this.contactList = this.firebase.list('Contacts');
        return this.contactList.snapshotChanges();
	}

	insertContact(contact){
    	this.contactList.push({
            firstName: contact.firstName,
            lastName: contact.lastName,
            mobile: contact.mobile
        });
    }

	populateForm(contact){
	    this.form.setValue(contact);
	}

	updateContact(contact){
	    this.contactList.update(contact.$key,{
	    	firstName: contact.firstName,
	        lastName: contact.lastName,
	        mobile: contact.mobile
	    });
	}

	deleteContact($key: string){
	    this.contactList.remove($key);
	  }
}
