import { Skill } from '../typings'
import axios from 'axios'

export const fetchSkills = async () => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

	const skills: Skill[] = res.data.skills

	return skills
}
