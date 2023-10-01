import React from 'react';

const videos = [
  {
    id: 1,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/bRniqiMKkxE/mqdefault_6s.webp?du=3000&sqp=COGC5qgG&rs=AOn4CLBFHiuOPwlzruw_wkjCK4AhmfOb3A",
    likes: 15,
    views: 40,
    title: "IMPORTANT ANNOUNCEMENT || 20th Anniversary Celebrations @krupaministriesofficial @kanakachari",
    
  },
  {
    id: 2,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/tZ-NttJ7jyk/mqdefault_6s.webp?du=3000&sqp=CIyX5qgG&rs=AOn4CLBCGE3-AaN1uEdZStRiVNVBfa98rA",
    likes: 25,
    views: 220,
    title: "నిజమైన ద్రాక్షావల్లి నీవే || Nijamaina Drakshavalli neeve |Song by @anjalievangelist#christiansongs",
    
  },
  {
    id: 3,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/mwR3gjFzyKE/mqdefault_6s.webp?du=3000&sqp=CK7x5agG&rs=AOn4CLBRcr5JEUjc1xTHaSm0fl8wdDrm0Q",
    likes: 9,
    views: 85,
    title: "దేవునికి శ్రేష్ఠమైన ప్రతిష్టగా ఉన్నావా.? #shortmessage By @Bro-Chari #shorts #10minutes #trending",
    
  },
  {
    id: 4,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/RNcHqyKvRLs/mqdefault_6s.webp?du=3000&sqp=CMyQ5qgG&rs=AOn4CLC-Bi3uYSeqtKDRqsmYrFv8ofy7bw",
    likes: 13,
    views: 81,
    title: "నోవహు పొందుకున్న ఆశీర్వాదం నువ్వు పొందుకోవాలంటే!! #shortmessage By@Bro-Chari #shorts #live #viral",
    
  },
  {
    id: 5,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/xogKiZTOLQ0/mqdefault_6s.webp?du=3000&sqp=CMGi5qgG&rs=AOn4CLDDptp2dmcSfVv45rmeJdjOSSwEwA",
    likes: 15,
    views: 97,
    title: "ఆదాము ఎలా ఆశీర్వదింపబడ్డాడు ||Short Message By @Bro-Chari #shorts #blessed #subscribe #viral #short",
    
  },
  {
    id: 6,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/CTM8ExWWvus/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrvT2Nj2NjG9FySMzHCyMI-X5REQ",
    likes: 17,
    views: 167,
    title: "దేవుని చిత్తం || God's Will || Short Message by Bro.Kanakachari #shortmessage #subscribe #viral",
    
  },
  {
    id: 7,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/-UmdI-Kkn9I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwhnDub2YEnqnyRfTwu6Q1loTTGQ",
    likes: 15,
    views: 82,
    title: "దేవునికి ఎలాంటి అర్పణ అర్పిస్తున్నావ్? By Bro.KanakaChari | Short message #shorts #15minutes",
    
  },
  {
    id: 8,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/Cd8yLJZNtcQ/mqdefault_6s.webp?du=3000&sqp=CMiL5qgG&rs=AOn4CLCHR_WBmActamIhRESpB3Q9CcQdUw",
    likes: 15,
    views: 321,
    title: "ప్రేమ యేసుని ప్రేమ..Prema Yesuni Prema.. #livesong By @Bro-Chari #teluguchristiansongs ",
    
  },
  {
    id: 9,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/ZqRuyEVLvls/mqdefault_6s.webp?du=3000&sqp=CJ2s5qgG&rs=AOn4CLD8s14emtMrW-OF7GL9BoH4lgeZHg",
    likes: 10,
    views: 113,
    title: "సంగీత నాదముతో | live worship song | bro Kanakachari | Sharon Prardhana Mandhiram @Bro-Chari",
    
  },
  {
    id: 10,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/lWePg6VmSE4/mqdefault_6s.webp?du=3000&sqp=CIyW5qgG&rs=AOn4CLACtC8BGduBdg4gFf-9CW58v_l4gA",
    likes: 7,
    views: 72,
    title: "ఓ స్నేహితుడా... నీది నిజమైన స్నేహమేనా... || Friendship Day Message by Bro.KanakaChari",
    
  },
  {
    id: 11,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/OvhWmskYX44/mqdefault_6s.webp?du=3000&sqp=CIKx5qgG&rs=AOn4CLBm8wCTNdnaQgzol3w0n99yu_lnYg",
    likes: 11,
    views: 65,
    title: "నూతన గీతము song..... live worship song #bronkanakachari #sharonprardhanamandhiram",
    
  },
  {
    id: 12,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/uDNy-BpO7UY/mqdefault_6s.webp?du=3000&sqp=CLKZ5qgG&rs=AOn4CLCjN3oK4nstdPfXGduwhjLEjVPCpw",
    likes: 12,
    views: 129,
    title: "మణిపూర్ లో జరుగుచున్న సంఘటనపై అద్భుతమైన వివరణ||Message by Bro.Kanakachari ",
    
  },
  {
    id: 13,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/eVG2uZuQJKI/mqdefault_6s.webp?du=3000&sqp=CKbC5qgG&rs=AOn4CLBu1mCThrU3wa4qb7Rv1mYOkBpmeA",
    likes: 15,
    views: 273,
    title: "అసాధ్యమని తెలుసుగా || pastor George bush || bro Kanakachari || sharon Prardhana mandhiram",
    
  },
  {
    id: 14,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/M86wC0YKKC4/mqdefault_6s.webp?du=3000&sqp=CLq65qgG&rs=AOn4CLC5vAoe_nwZA332Ev3itYlQLQeh_w",
    likes: 9,
    views: 102,
    title: "మా కాపరి వైనందునా || pastor George bush || bronkanakachari || telugu worship song",
    
  },
  {
    id: 15,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/pNzRwidyiWY/mqdefault_6s.webp?du=3000&sqp=CNa-5qgG&rs=AOn4CLCwEO0a7XiFtD6lFPmEQii7vkJ4nw",
    likes: 12,
    views: 94,
    title: "ఓ ప్రభువా.....బ్రదర్ ఎన్. కనకాచారి #sharonprardhanamandhiram #bronkanakachari #livesongrecording",
    
  },
  {
    id: 16,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/gJ8Q3cNjsaY/mqdefault_6s.webp?du=3000&sqp=CJC85qgG&rs=AOn4CLAzp7xQbZocEB9URfEgYNCusRMNQA",
    likes: 15,
    views: 153,
    title: "నిన్ను విడచి నీ ప్రేమ మరచి లైవ్ సాంగ్ || బ్రదర్. కనకాచారి #bronkanakachari #sharonprardhanamandhiram",
    
  },
  {
    id: 17,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/vi/4ICVcT-l6ms/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtWvnLu8rt5CAtErgKnJreOVDpXA",
    likes: 11,
    views: 48,
    title: "#happybirthday #celebration happybirthday KRUPA SANGEETH",
    
  },
  {
    id: 18,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/HuQNZjL5-X8/mqdefault_6s.webp?du=3000&sqp=CIG85qgG&rs=AOn4CLC1thmijZRqca5ilEZ6J5UYlUgQ7Q",
    likes: 15,
    views: 40,
    title: "#sundayworshipservice 🔴ఆదివారం ఆరాధన || Bro Kanakachari || sharon prardhana mandhiram",
    
  },
  {
    id: 19,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/CxL6lHkHaSw/mqdefault_6s.webp?du=3000&sqp=CKiX5qgG&rs=AOn4CLDJYXgEhZS0v_vm58SwUAJb1TW6sA",
    likes: 11,
    views: 47,
    title: "🔴ఆదివారం ఆరాధన || Bro Kanakachari garu || sharon prardhana mandhiram #sundayservice #live",
    
  },
  {
    id: 20,
    channelName: "Sharon prardhana mandhiram",
    channelLogoUrl: "https://yt3.googleusercontent.com/7m5t5Fdo9nCPMWHDpBP4-Goy6-BAMU3BYRW80XE6ZcietNr_MRUtv6t-tO18S_bMcU0RwTyzm1s=s88-c-k-c0x00ffffff-no-rj",
    thumbnailUrl: "https://i.ytimg.com/an_webp/HJYIp_NnlYM/mqdefault_6s.webp?du=3000&sqp=CInF5qgG&rs=AOn4CLD5H7FLa8XnMLOQwHc7xA4ObvjHIw",
    likes: 11,
    views: 158,
    title: "🔴#కుటుంబఆశీర్వాదకూడిక ......pas జార్జ్ బుష్ గారు|| SHARON PRARDHANA MANDHIRAM || POTHUREDDYPALLI___",
    
  },
  
 
];

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div className="video-card" key={video.id}>
            <div className="channel-info">
              <p className="channel-name">{video.channelName}</p>
              <span> < img src={video.channelLogoUrl} alt={video.channelName} className="channel-logo" /></span>
            </div>
          <img src={video.thumbnailUrl} alt={video.title} className="thumbnail" />
          <div className="video-info">
          <div className="video-stats">
              <span className="views">{video.views} Views</span>
              <span className="likes">{video.likes} Likes</span>
            </div>            
            <p className="video-title">{video.title}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
