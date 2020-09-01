import {useRouter} from 'next/router';

export default function Series(){
	const router = useRouter();
	const {id} = router.query;
	console.log(id);

	return (
		<h1>Hola anime {id}</h1>
	)
}