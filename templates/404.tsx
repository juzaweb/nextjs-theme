import { NextPage } from "next";
import Link from "next/link";
import { __ } from "../context/Helper";
import { Page404Props } from "../context/Props";

const Page404Template: NextPage<Page404Props> = (props) => {
  return (
    <>
        <div className="text-center">
            <h1>{props?.message || '404 - Page not found'}</h1>
            <Link href={'/'}>{__('Go to home page')}</Link>
        </div>
    </>
  )
}

export default Page404Template;
