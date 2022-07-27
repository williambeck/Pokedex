import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In repellat
        impedit neque et sapiente ipsam laboriosam adipisci illum. Iure
        voluptate itaque culpa minus ipsa architecto dolorum! Dignissimos
        recusandae ea aperiam?
      </p>
      <Image
        src="/images/pokemon_PNG98.png"
        width="1000"
        height="450"
        alt="Iniciais"
      />
    </div>
  )
}
