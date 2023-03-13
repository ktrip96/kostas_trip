import { Social } from '../typings'
import axios from 'axios'

export const fetchSocials = async () => {
	const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

	const socials: Social[] = res.data.socials

	return socials
}
