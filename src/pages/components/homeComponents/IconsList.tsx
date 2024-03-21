import Image from 'next/image'
import React from 'react'

export default function IconsList() {
  return (
    <div className='flex flex-col gap-y-10'>
        <div className='flex gap-x-4 '>
            <Image src={"/img/facebook-ads.webp"} alt='' width={100} height={100} className='object-contain w-[100px]'/>
            <div className='flex flex-col gap-y-3'>
                <h4 className='list-title'>Facebook Ads</h4>
                <p className='body-text'>Rejoignez vos clients au bon moment et au bon endroit à faible coût.</p>
            </div>
        </div>
        <div className='flex gap-x-4 '>
            <Image src={"/img/google-ads.webp"} alt='' width={100} height={100} className='object-contain w-[100px]'/>
            <div className='flex flex-col gap-y-3'>
                <h4 className='list-title'>Google Ads - SEA</h4>
                <p className='body-text'>{`Notre agence Web est reconnue partenaire Google, cette distinction étant due à notre savoir-faire, ainsi qu'à l'excellence de notre travail sur leurs outils publicitaires.`}</p>
            </div>
        </div>
        <div className='flex gap-x-4 '>
            <Image src={"/img/digital-marketing.webp"} alt='' width={100} height={100} className='object-contain w-[100px]'/>
            <div className='flex flex-col gap-y-3'>
                <h4 className='list-title'>Marketing Digital</h4>
                <p className='body-text'>Optimisez votre présence en ligne avec nos stratégies de marketing digital sur mesure</p>
            </div>
        </div>
        <div className='flex gap-x-4 '>
            <Image src={"/img/seo.webp"} alt='' width={100} height={100} className='object-contain w-[100px]'/>
            <div className='flex flex-col gap-y-3'>
                <h4 className='list-title'>Référencement naturel - SEO</h4>
                <p className='body-text'>Positionnez votre PME sur la première page de Google et ainsi augmentez vos revenus.</p>
            </div>
        </div>
    </div>
  )
}
