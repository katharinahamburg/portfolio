import { Component, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('button') button!: ElementRef


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let button = this.button.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    button.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', mailField.value);

    await fetch('https://katharina@hinnrichs.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
    this.animateForm();
  }

  
  animateForm() {
    if (this.sendMail) {
        let form = document.getElementById('form');
        let sendMessage = document.getElementById('send-message');
        form.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
        sendMessage.style.visibility = 'visible';
        sendMessage.style.zIndex = '9';
      }, 200);
    }
  }
}