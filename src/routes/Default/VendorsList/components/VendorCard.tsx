import { Image } from '@/lib/components';
import { NumberUtils } from '@/lib/utils';
import { Vendor } from '@/lib/types/vendor';
import '@/assets/sass/routes/VendorCard.scss';

interface Props {
	vendor: Vendor
}

export default function VendorCard({ vendor }: Props) {

	const coverPhoto = vendor.backgroundImageCustom.replace('w.x.h', '350x200');

	return (
		<a href={vendor.menuUrl} rel='noreferrer noopener' target='_blank'>
			<article className='card'>
				<div className='card__header'>
					<Image className='card__cover' src={coverPhoto} alt={vendor.logo} width='350px' height='200px' draggable={false} crossOrigin='anonymous' loading='lazy' />
					<Image className='card__logo' src={vendor.logo} alt={`${vendor.logo}'s logo`} width='150px' height='150px' crossOrigin='anonymous' loading='lazy' />
				</div>
				<div className='card__body'>
					<div className='flex justify-between'>
						<h4 className='card__title'>
							{vendor.title}
						</h4>
						<div className='card__rating'>
							<span className='card__vote-count'>({NumberUtils.thSeparator(vendor.voteCount)})</span>
							<span className='card__vote'>{vendor.rate}</span>
						</div>
					</div>

					<p className='card__desc'>
						{vendor.description}
					</p>
					<div className="flex justify-between">
						<div>
							{
								vendor.isZFExpress
									? <span className='card__delivery--express'>ارسال اکسپرس</span>
									: <span className='card__delivery'>پیک رستوران</span>
							}
							{
								vendor.deliveryFee > 0
									? `${NumberUtils.thSeparator(vendor.deliveryFee)  } تومان`
									: 'رایگان'
							}
						</div>
						<div>
							{(vendor.eta && vendor.eta >= 0) && <span className='card__delivery-time'>تا {vendor.eta} دقیقه</span>}
						</div>
					</div>
				</div>
			</article>
		</a>
	);
}
