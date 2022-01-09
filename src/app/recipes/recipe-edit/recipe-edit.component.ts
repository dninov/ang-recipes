import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
      console.log(this.editMode);
    });
  }

  private initForm() {
    let recipeName = "";
    let recipeImageUrl = "";
    let recipeDescr = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imagePath;
      recipeDescr = recipe.description;
      if (recipe["ingredients"]) {
        recipe["ingredients"].map((ingredient) => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        });
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImageUrl, Validators.required),
      description: new FormControl(recipeDescr, Validators.required),
      ingredients: recipeIngredients,
    });
  }
  onSubmit() {
    // IF FORM IS DIFFERENT THEN THE MODEL OF THE RECIPE
    // const newRecipe = new Recipe(
    //   this.recipeForm.value["name"],
    //   this.recipeForm.value["decription"],
    //   this.recipeForm.value["imagePath"],
    //   this.recipeForm.value["ingredients"]
    // );

    // IF FORM IS THE SAME AS THE RECIPE

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.router.navigate(["../"], { relativeTo: this.route });
  }
  onDeleteIngredient(index: number): void {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
}
