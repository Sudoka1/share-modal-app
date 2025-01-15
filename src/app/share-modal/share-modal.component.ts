import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-share-modal',
  standalone: true,
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ShareModalComponent {
  searchQuery: string = '';
  message: string = '';
  selectedUsers: any[] = [];
  users = [
    { name: 'TurkishPower1990PC', image: 'assets/image1.png' },
    { name: 'jmk490', image: 'assets/image2.jpg' },
    { name: 'Sabir Suleyman', image: 'assets/image3.jpeg' }
  ];
  filteredUsers = [...this.users];

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectUser(user: any) {
    if (this.selectedUsers.includes(user)) {
      this.selectedUsers = this.selectedUsers.filter(u => u !== user);
    } else {
      this.selectedUsers.push(user);
    }
  }

  sendMessages() {
    console.log('Message:', this.message);
    console.log('Selected Users:', this.selectedUsers);
    alert('Messages sent successfully!');
  }

  closeModal() {
    alert('Modal closed');
  }
}
