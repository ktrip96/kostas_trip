import { Experience } from '../typings'
import axios from 'axios'

export const fetchExperiences = async () => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

	const experiences: Experience[] = res.data.experiences

	return experiences
}
