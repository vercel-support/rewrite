import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles.module.css'

export const getStaticPaths = async () => {
	return {
		paths: [{ params: { path: ["about"] } }],
		fallback: true
	}
}

export const getStaticProps = async ({ params }) => { 

	console.log(params);

	const props = { path: params.path };

	return { props, revalidate: 120 }
}

export default function Path({path}) {
  return (
    <div>
		Path: {JSON.stringify(path)}
	</div>
  )
}
