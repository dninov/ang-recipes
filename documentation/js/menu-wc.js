'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-first-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8652f572c8ebaf7ce0728334446390a260537afaeb0ea063d0542ef27079bba59135cd0987c5c1bfe75a3b942b7c7a714ddcfc71e4dd6d0ca8df98129d4288a4"' : 'data-target="#xs-components-links-module-AppModule-8652f572c8ebaf7ce0728334446390a260537afaeb0ea063d0542ef27079bba59135cd0987c5c1bfe75a3b942b7c7a714ddcfc71e4dd6d0ca8df98129d4288a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8652f572c8ebaf7ce0728334446390a260537afaeb0ea063d0542ef27079bba59135cd0987c5c1bfe75a3b942b7c7a714ddcfc71e4dd6d0ca8df98129d4288a4"' :
                                            'id="xs-components-links-module-AppModule-8652f572c8ebaf7ce0728334446390a260537afaeb0ea063d0542ef27079bba59135cd0987c5c1bfe75a3b942b7c7a714ddcfc71e4dd6d0ca8df98129d4288a4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-68f6a0bea7ac5c91431da186449365e1707660e3bdb7621ba6458590814ef65d44ec43202acffd88c173c04d87e4bc0bcbecd7d7b788b1aa75d50f3348135c85"' : 'data-target="#xs-components-links-module-AuthModule-68f6a0bea7ac5c91431da186449365e1707660e3bdb7621ba6458590814ef65d44ec43202acffd88c173c04d87e4bc0bcbecd7d7b788b1aa75d50f3348135c85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-68f6a0bea7ac5c91431da186449365e1707660e3bdb7621ba6458590814ef65d44ec43202acffd88c173c04d87e4bc0bcbecd7d7b788b1aa75d50f3348135c85"' :
                                            'id="xs-components-links-module-AuthModule-68f6a0bea7ac5c91431da186449365e1707660e3bdb7621ba6458590814ef65d44ec43202acffd88c173c04d87e4bc0bcbecd7d7b788b1aa75d50f3348135c85"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-0c2905e07047e14e90d84217a43a804a6dbfde6685262e10e5e6f3d081c6533bff23c14235163f494421b10e2efb22f06decd5d455eaf0864545c4bf5d82309e"' : 'data-target="#xs-injectables-links-module-CoreModule-0c2905e07047e14e90d84217a43a804a6dbfde6685262e10e5e6f3d081c6533bff23c14235163f494421b10e2efb22f06decd5d455eaf0864545c4bf5d82309e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-0c2905e07047e14e90d84217a43a804a6dbfde6685262e10e5e6f3d081c6533bff23c14235163f494421b10e2efb22f06decd5d455eaf0864545c4bf5d82309e"' :
                                        'id="xs-injectables-links-module-CoreModule-0c2905e07047e14e90d84217a43a804a6dbfde6685262e10e5e6f3d081c6533bff23c14235163f494421b10e2efb22f06decd5d455eaf0864545c4bf5d82309e"' }>
                                        <li class="link">
                                            <a href="injectables/RecipeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipesModule.html" data-type="entity-link" >RecipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RecipesModule-4ef578c094704347e721a487a671dc3778b6320a5293641f1f377362cf5ec95b6dab6055992c708b41a83f78e3552c9bdab836530891a37151537e5c594c4d01"' : 'data-target="#xs-components-links-module-RecipesModule-4ef578c094704347e721a487a671dc3778b6320a5293641f1f377362cf5ec95b6dab6055992c708b41a83f78e3552c9bdab836530891a37151537e5c594c4d01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecipesModule-4ef578c094704347e721a487a671dc3778b6320a5293641f1f377362cf5ec95b6dab6055992c708b41a83f78e3552c9bdab836530891a37151537e5c594c4d01"' :
                                            'id="xs-components-links-module-RecipesModule-4ef578c094704347e721a487a671dc3778b6320a5293641f1f377362cf5ec95b6dab6055992c708b41a83f78e3552c9bdab836530891a37151537e5c594c4d01"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipeListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipeListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecipesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecipesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecipesRoutingModule.html" data-type="entity-link" >RecipesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' : 'data-target="#xs-components-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' :
                                            'id="xs-components-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' : 'data-target="#xs-directives-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' :
                                        'id="xs-directives-links-module-SharedModule-9901cf77205cad3490c21ac890ea28746eaf958c371ea5e35d63ef63ddbc8931cfaeb57319ec41ec0dfb95600826cfc0ae0fd0e40b0a0db7ebce32a345df93bc"' }>
                                        <li class="link">
                                            <a href="directives/DropdownDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DropdownDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PlaceholderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingListModule.html" data-type="entity-link" >ShoppingListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShoppingListModule-30fa2227572be08bbd661ff35474147d429b55b0b99acc8e6bb8c794c8c0131f5b0cc654845286543dd3d1ce87ae06e9ccec0c30bafb03549c8a246cd83bf35d"' : 'data-target="#xs-components-links-module-ShoppingListModule-30fa2227572be08bbd661ff35474147d429b55b0b99acc8e6bb8c794c8c0131f5b0cc654845286543dd3d1ce87ae06e9ccec0c30bafb03549c8a246cd83bf35d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingListModule-30fa2227572be08bbd661ff35474147d429b55b0b99acc8e6bb8c794c8c0131f5b0cc654845286543dd3d1ce87ae06e9ccec0c30bafb03549c8a246cd83bf35d"' :
                                            'id="xs-components-links-module-ShoppingListModule-30fa2227572be08bbd661ff35474147d429b55b0b99acc8e6bb8c794c8c0131f5b0cc654845286543dd3d1ce87ae06e9ccec0c30bafb03549c8a246cd83bf35d"' }>
                                            <li class="link">
                                                <a href="components/ShoppingEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShoppingListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShoppingListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Ingredient.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="classes/Recipe.html" data-type="entity-link" >Recipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShoppingListService.html" data-type="entity-link" >ShoppingListService</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataSorageService.html" data-type="entity-link" >DataSorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingService.html" data-type="entity-link" >LoggingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecipeService.html" data-type="entity-link" >RecipeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptorService.html" data-type="entity-link" >AuthInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RecipeResolverService.html" data-type="entity-link" >RecipeResolverService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthResponseData.html" data-type="entity-link" >AuthResponseData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});