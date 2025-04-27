import {InfiniteSlider} from "@/Components/InfiniteSlider.jsx";

export function InfiniteSliderBasic() {

    const games = [
        {
            title: "The Witcher 3: Wild Hunt",
            genre: "Action role-playing",
            releaseYear: 2015,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/The_Witcher_3%3A_Wild_Hunt",
            description: "An open-world epic following Geralt of Rivia across a massive, monster-filled realm, with over 100 hours of main & side content."
        },
        {
            title: "God of War",
            genre: "Action-adventure",
            releaseYear: 2018,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/God_of_War_(2018_video_game)",
            description: "A deeply personal journey of Kratos and his son Atreus through Norse realms—redefined the series with over-the-shoulder camera and RPG elements."
        },
        {
            title: "Red Dead Redemption 2",
            genre: "Action-adventure",
            releaseYear: 2018,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/Red_Dead_Redemption_2",
            description: "Story of Arthur Morgan and the Van der Linde gang in a sprawling, living Western frontier—praised for its narrative depth and world realism."
        },
        {
            title: "Elden Ring",
            genre: "Action role-playing",
            releaseYear: 2022,
            imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
            wikiUrl: "https://en.wikipedia.org/wiki/Elden_Ring",
            description: "A vast, open-world Dark Souls-style adventure co-created with George R.R. Martin—features mounted combat, seamless exploration, and punishing bosses."
        }
    ];

    return (
        <InfiniteSlider  gap={68} reverse>
            {games.map((game)=> (
                <div className="flex flex-col gap-y-4 items-center">
                    <div>

                <img
                    src={game.imageUrl}
                    alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
                    className="
    h-[250px]       /* 200px tall */
    aspect-square   /* 1:1 ratio → 200×200 */
    object-cover    /* crop/fill without distortion */
    border-transparent rounded-md
  "
                />
                    </div>
                    <div>
                        <h1 className="text-xl text-white">{game.title}</h1>
                    </div>
                </div>
            ))}
        </InfiniteSlider>
    );
}
