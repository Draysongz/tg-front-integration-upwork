import { useCallback, ReactElement } from 'react';
import { useAdsgram } from '../hooks/useAdsGram'; // Assuming useAdsgram is in the hooks folder
import { ShowPromiseResult } from '../types/adsgram'; // Assuming adsgram types are defined in types folder
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap to use the same button component

export function ShowAdButton(): ReactElement {
	const onReward = useCallback(() => {
		// Code to handle user reward
		alert('You have earned your reward!');
	}, []);

	const onError = useCallback((result: ShowPromiseResult) => {
		// Code to handle error or skipped ad
		alert(`Ad error or skipped: ${JSON.stringify(result, null, 4)}`);
	}, []);

	// Replace "your-block-id" with the actual block ID for AdsGram
	const showAd = useAdsgram({ blockId: "3059", onReward, onError });

	return (
		<Button onClick={showAd} className='w-100 main-button py-3 rounded-4 fw-normal'>
			<strong>🚀 BOOST </strong> GET EXTRA REWARDS
		</Button>
	);
}