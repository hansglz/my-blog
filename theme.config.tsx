import CustomHead from '#components/custom-head'
import Link from 'next/link'
import { FaGithub, FaRss, FaInstagram, FaTwitter } from 'react-icons/fa'

// Fixed name and paths

// Year
const YEAR = new Date().getFullYear()

// Nextra blog theme config
const NextraThemeConfig = {
  // <Head>
  head: CustomHead,

  // Date format
  dateFormatter: (date: Date) => `${date.toDateString()}`,

  // <Footer/>
  footer: (
    <div>
      <hr />
      <div className="grid auto-cols-min grid-flow-col gap-8 text-xl ss:gap-4">
        <Link
          href="https://github.com/hansglz"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
          className=""
        >
          <FaGithub />
        </Link>
        <Link
          href="https://twitter.com/hanseglz"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className=""
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://instagram.com/zzz_hansglz"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className=""
        >
          <FaInstagram />
        </Link>
      </div>
      <small className="mt-32 block text-p-light dark:text-inherit">
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          className="cursor-help"
        >
          CC BY-NC 4.0
        </abbr>{' '}
        <time>{YEAR}</time> © Hans Zhang.
      </small>
    </div>
  ),

  darkMode: true
}

export default NextraThemeConfig
