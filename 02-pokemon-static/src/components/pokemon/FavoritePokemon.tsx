import { createSignal, For } from "solid-js";
import type { FavoritePokemon as FavoritePokemonType } from "@interfaces/favorite-pokemon"; 
import { FavoritePokemonCard } from "./FavoritesPokemonCard";

const getLocalStoragePokemons = (): FavoritePokemonType[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  );
  return favoritePokemons;
};

export const FavoritePokemon = () => {
  const [pokemon, setPokemons] = createSignal(getLocalStoragePokemons());

 


  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemon()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
 );
};
