import { Project } from '../typings'
import axios from 'axios'

export const fetchProjects = async () => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

	const projects: Project[] = res.data.projects

	return projects
}
