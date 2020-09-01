import Episode from './CardEpisode';

export default function Episodes({episodes, title}){
	return episodes.map(episode=>(
			<Episode episode={episode} title={title} key={episode.id}/>
		));
	
}