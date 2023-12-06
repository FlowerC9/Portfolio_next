import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg
    "
    >
      <Layout clasName="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rigts Reserved</span>
        <div className='flex items-center'>
          Build By &nbsp;
        <Link href="https://linkedin.com/in/monojit-tewari"
        className='underline underline-offset-2'
        >Monojit</Link>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer