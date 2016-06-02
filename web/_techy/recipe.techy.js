
function html(recipe) {
	return `
<div class="recipe">
	<div class="recipe-ingredients">
		<div class="recipe-row">
			<span class="recipe-slot sprite item-sprite ${recipe.slot1 || ''}"></span><span class="recipe-slot sprite item-sprite ${recipe.slot2 || ''}"></span><span class="recipe-slot sprite item-sprite ${recipe.slot3 || ''}"></span>
		</div>
		<div class="recipe-row">
			<span class="recipe-slot sprite item-sprite ${recipe.slot4 || ''}"></span><span class="recipe-slot sprite item-sprite ${recipe.slot5 || ''}"></span><span class="recipe-slot sprite item-sprite ${recipe.slot6 || ''}"></span>
		</div>
		<div class="recipe-row">
			<span class="recipe-slot sprite item-sprite ${recipe.slot7 || ''}"></span><span class="recipe-slot sprite item-sprite ${recipe.slot8 || ''}"></span><span class="recipe-slot sprite item-sprite ${recipe.slot9 || ''}"></span>
		</div>
	</div>
	<div class="recipe-arrow">
	</div>
	<div class="recipe-result">
		<span class="recipe-slot slot-large sprite item-sprite ${recipe.result || ''}"></span>
	</div>
</div>
`;
}

module.exports = function(recipe) {
    return html(recipe);
};