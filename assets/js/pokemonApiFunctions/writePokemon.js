export function writePokemon(data){
    //this div is discarded and only its child <figure></figure> element below is added to the page
    let newCardEl = document.createElement("div"); 
    newCardEl.innerHTML = 
      `<!-- Pokemon Card Template -->
      <figure class="card card--normal ${data.types[0].type.name}" id="${data.name}" style="display: block;">
        
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <!--Pokemon Card Image-->
        <div class="card_image-container">
          <img src="${data.sprites.other.dream_world.front_default} "width="250px" height="250px" id="pokemonImage" alt="Image" class="card_image">   
        </div>         

        <!--Image Caption - Begins Pokemon Information-->
        <figcaption class="card_caption">

          <!--Pokemon Name and Type-->
          <h2 id="pokemonName" class="card_name">${data.name.toUpperCase()}</h2>
          <h3 id="pokemonType" class="card_type badge badge-secondary">Type: ${data.types[0].type.name}</h3>

          <!--Pokemon Stats-->    
          <div class="card_stats" id="card_stats">
            <table>
              <tbody>
                <tr>
                  <th id="hp">HP:</th>
                  <td id="hpResult"></td>
                </tr>
                <tr>
                  <th id="attack">Attack:</th>
                  <td id="attackResult"></td>
                </tr>
                <tr>
                  <th id="defense">Defense:</th>
                  <td id="defenseResult"></td>
                </tr>    
                <tr>
                  <th id="specialAttack">Special Attack:</th>
                  <td id="special-attackResult"></td>
                </tr>    
                <tr>
                  <th id="specialDefense">Special Defense:</th>
                  <td id="special-defenseResult"></td>
                </tr>    
                <tr>
                  <th id="Speed">Speed:</th>
                  <td id="speedResult"></td>
                </tr>
              </tbody> 
            </table>
          </div>

          <!--Pokemon Other Abilities-->
          <div class="card_abilities" id="card_abilities">
            <h4 class="card_ability">
              <span id ="ability" class="card_label">Ability: ${data.abilities[0].ability.name.toUpperCase()}</span>
            </h4>
            <h4 class="card_ability">
              <span id="hidden-ability" class="card_label">Hidden Ability: ${data.abilities[1].ability.name.toUpperCase()}</span>
            </h4>
          </div>

        </figcaption>
      </figure>`;

   
    
    for (let i=0; i<data.stats.length; i++) {
        $(newCardEl).find(`#${data.stats[i].stat.name}Result`).text(data.stats[i].base_stat);
    };
    
    $("#cards").prepend(newCardEl.children);
};
