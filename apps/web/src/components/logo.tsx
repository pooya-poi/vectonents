import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}
const Logo: React.FC<LogoProps> = ({className}) => (

    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="83" height="91" viewBox="0 0 93 101" fill="none"><path fill="currentColor" d="M20.562 91q-2.477 0-3.984-.965-1.507-.857-2.476-3.215L3.552 60.56a117 117 0 0 0-1.722-4.18 46 46 0 0 1-1.076-3.43 28 28 0 0 1-.646-3.538A82 82 0 0 1 0 44.911V16.614q0-1.394.323-2.358a4.5 4.5 0 0 1 1.184-1.608L15.394.965q.54-.429 1.4-.643A6.5 6.5 0 0 1 18.839 0h17.117q2.583 0 3.875 1.286 1.4 1.179 1.4 3.645v29.583q0 1.071.215 2.036.216.965.538 2.037l.323.75V16.614q0-1.394.323-2.358a4.5 4.5 0 0 1 1.185-1.608L57.702.965q.537-.429 1.4-.643A6.5 6.5 0 0 1 61.146 0h16.901q2.691 0 3.768 1.179Q83 2.359 83 4.931v28.296q0 2.573-.215 4.502a19 19 0 0 1-.539 3.537 28 28 0 0 1-1.184 3.43 324 324 0 0 1-1.614 4.18l-10.55 26.26a6.4 6.4 0 0 1-.862 1.716q-.538.75-1.076 1.179L53.073 89.499q-.862.75-2.046 1.072-1.076.429-2.476.429zm41.876-12.755q2.046 0 3.338-.75 1.399-.75 2.153-2.787l10.55-26.26q.968-2.358 1.614-4.073.647-1.822 1.077-3.43t.538-3.323q.216-1.823.216-4.395V4.931q0-2.037-.97-2.894-.86-.965-2.906-.965H61.147q-2.046 0-3.015.965-.86.857-.86 2.894v29.475q0 1.073-.216 2.144a15.5 15.5 0 0 1-.646 2.25l-5.06 15.114q-.323 1.072-.753 1.5-.43.322-1.292.322H48.12q-.862 0-1.292-.321-.43-.429-.754-1.501l-5.06-15.006a15.5 15.5 0 0 1-.645-2.25 11 11 0 0 1-.216-2.145V4.932q0-2.037-1.076-2.894-1.077-.965-3.122-.965H18.839q-2.045 0-3.014.965-.861.857-.861 2.894v28.296q0 2.573.107 4.395.216 1.714.646 3.323a46 46 0 0 0 1.077 3.43q.646 1.714 1.615 4.073l10.55 26.26q.753 2.037 2.045 2.787 1.4.75 3.445.75zm-35.31-67.526h1.077V33.87q0 2.787.43 5.36.431 2.465 1.292 4.609l7.105 17.15q1.077 2.786 2.369 4.715 1.4 1.823 4.413 1.823h9.474q3.015 0 4.306-1.823 1.4-1.929 2.476-4.716l7.105-17.15a23 23 0 0 0 1.292-4.608q.43-2.573.43-5.36V10.72h1.077V33.87q0 3.002-.43 5.574a19.2 19.2 0 0 1-1.292 4.823l-7.105 17.15q-1.292 3.108-2.907 5.145t-4.952 2.036h-9.473q-3.337 0-4.953-2.036-1.614-2.037-2.906-5.145l-7.105-17.15a23 23 0 0 1-1.4-4.823 45 45 0 0 1-.323-5.574z" /></svg>

)

Logo.displayName = 'pageComponents';
export default Logo;