import { Component } from "@angular/core";
import { DataSorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(private dataStorage: DataSorageService) {}
  onSave() {
    this.dataStorage.storeRecipes();
  }
  fetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
