import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef
  @ViewChild('nameField') nameField!: ElementRef
  @ViewChild('mailField') mailField!: ElementRef
  @ViewChild('messageField') messageField!: ElementRef
  @ViewChild('sendButton') sendButton!: ElementRef


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', mailField.value);

    await fetch('https://hinnrichs.de/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    
  }

  
  }
