export const ItemTypes = {
  MOVIE: 'movie',
  TV: 'tv'
};

export const POPULAR_MOVIES = [
  {
    id: '1',
    title: '沙丘 2',
    year: '2024',
    genre: '科幻',
    rating: '8.8',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPIYr7ZKw5HD_j0w3FtRl_sOzoh2a3qkI4fHQpEneBu9JORlTaJ1AgSA3V_IEY4zPx6kq4o1ABuPQ5RPTDe29cXfyftLWarkk4a0VWo0KsxToITkebQ4QdSBXdmkKW15pXJgiETPVdhzdc46btLp_6Ib3inEZEbfBgWXzSB3hhB88EGXakuD5l7bGsFuI1pokafItW4a2di2_ZFWWliEMYYjQJMDNU7PkuQpRWmUxGo4LWsJDjoLi-HuE1ZKNWEAnxKBRSvPRwHU',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPIYr7ZKw5HD_j0w3FtRl_sOzoh2a3qkI4fHQpEneBu9JORlTaJ1AgSA3V_IEY4zPx6kq4o1ABuPQ5RPTDe29cXfyftLWarkk4a0VWo0KsxToITkebQ4QdSBXdmkKW15pXJgiETPVdhzdc46btLp_6Ib3inEZEbfBgWXzSB3hhB88EGXakuD5l7bGsFuI1pokafItW4a2di2_ZFWWliEMYYjQJMDNU7PkuQpRWmUxGo4LWsJDjoLi-HuE1ZKNWEAnxKBRSvPRwHU',
    description: '上古之时，有异人留下"七根心简"，记载着长生的秘密，也封印着足以毁灭世间的力量。',
    actors: [
      { name: '罗韧', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw' },
      { name: '木代', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt2vm3DWR8-Rd-KuQiD3sGCo0BWHaYxAnr4oxuTnEca4OGjkx4RjLfulxvSCWw_mpm82DiXVvV4FdmGZCje8CZ6WvvJNVCoKzhxsSV9daWW--sJDNTjzJ6lSwUXlTxbgGyIgh7Nch8L44rQEeWtfEmwpRjXGen_PGJJUhyy72_2dblnbPZSpoqJDAwHGjgV5wZf_M9lv7Gnw-RQLKtVxwm3ocNoTuc475NTsqxQ82l8atjF4MbSFPmBDVUISzthiU96jP8VYKv5PU' }
    ]
  },
  {
    id: '2',
    title: '黑客帝国',
    year: '1999',
    genre: '动作',
    rating: '8.7',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw',
  },
  {
    id: '3',
    title: '星际穿越',
    year: '2014',
    genre: '冒险',
    rating: '8.6',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt2vm3DWR8-Rd-KuQiD3sGCo0BWHaYxAnr4oxuTnEca4OGjkx4RjLfulxvSCWw_mpm82DiXVvV4FdmGZCje8CZ6WvvJNVCoKzhxsSV9daWW--sJDNTjzJ6lSwUXlTxbgGyIgh7Nch8L44rQEeWtfEmwpRjXGen_PGJJUhyy72_2dblnbPZSpoqJDAwHGjgV5wZf_M9lv7Gnw-RQLKtVxwm3ocNoTuc475NTsqxQ82l8atjF4MbSFPmBDVUISzthiU96jP8VYKv5PU',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt2vm3DWR8-Rd-KuQiD3sGCo0BWHaYxAnr4oxuTnEca4OGjkx4RjLfulxvSCWw_mpm82DiXVvV4FdmGZCje8CZ6WvvJNVCoKzhxsSV9daWW--sJDNTjzJ6lSwUXlTxbgGyIgh7Nch8L44rQEeWtfEmwpRjXGen_PGJJUhyy72_2dblnbPZSpoqJDAwHGjgV5wZf_M9lv7Gnw-RQLKtVxwm3ocNoTuc475NTsqxQ82l8atjF4MbSFPmBDVUISzthiU96jP8VYKv5PU',
  },
  {
    id: '4',
    title: '赛博朋克：边缘行者',
    year: '2022',
    genre: '动漫',
    rating: '8.3',
    type: 'tv',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcUFQ6XhWm7AM1Hffu7ZtynTaP01bVNFKnhw_cVBmyog2aD4fFM3o6GHR06iml8LvVKpKOdVBBn0MliEUNX4mm6ywqISoZFPCdLDZX5EkjJhbqWXX6UPGg5gYX4m-DJM52sOiFyFe1jdUyiPZMEeaSXC27ZwIkVXQDqabNNYS-t-Th4N2b6zubNwVJbUUSdJZjU3xd48LDbBMtZDGlVSEQIMLtogR8omk-GNu0IBJqhEYpphQEq0UG1M4TdIzkhhP3_55Bb_ZMa5Y',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcUFQ6XhWm7AM1Hffu7ZtynTaP01bVNFKnhw_cVBmyog2aD4fFM3o6GHR06iml8LvVKpKOdVBBn0MliEUNX4mm6ywqISoZFPCdLDZX5EkjJhbqWXX6UPGg5gYX4m-DJM52sOiFyFe1jdUyiPZMEeaSXC27ZwIkVXQDqabNNYS-t-Th4N2b6zubNwVJbUUSdJZjU3xd48LDbBMtZDGlVSEQIMLtogR8omk-GNu0IBJqhEYpphQEq0UG1M4TdIzkhhP3_55Bb_ZMa5Y',
  },
  {
    id: '5',
    title: '银翼杀手 2049',
    year: '2017',
    genre: '科幻',
    rating: '8.0',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKjzVh6UF3ar1vZNo9d0h1Ed05wVFSF7JkfOzzBjU0WjDvtHB8ovTkiv7ebcIYMlUGdOOrT1MgGHwZsajq4C4ecRbfx-owJjQwAeFKBQLUhx45jPKv0LCRUW6MwxefZk7FpnTdhwDXvi9TbBxRRHWIzBzxFOamwHZaaonzmi7yNKqHe_ZsFSBpzhYAdp83E64th3d-Ism7n76zTfOnWMDjBgaxDcI2BN6FhoDuE5cMYP8eIC9FJirXtMyuOMJemrEkneL205wzHgE',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKjzVh6UF3ar1vZNo9d0h1Ed05wVFSF7JkfOzzBjU0WjDvtHB8ovTkiv7ebcIYMlUGdOOrT1MgGHwZsajq4C4ecRbfx-owJjQwAeFKBQLUhx45jPKv0LCRUW6MwxefZk7FpnTdhwDXvi9TbBxRRHWIzBzxFOamwHZaaonzmi7yNKqHe_ZsFSBpzhYAdp83E64th3d-Ism7n76zTfOnWMDjBgaxDcI2BN6FhoDuE5cMYP8eIC9FJirXtMyuOMJemrEkneL205wzHgE',
  },
  {
    id: '6',
    title: '奥本海默',
    year: '2023',
    genre: '剧情',
    rating: '8.5',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBnL9ZFp4A2-V-zcnH2bJOUfYCvj_JeayXpHWVf_v_o3lT07VGPl33MHFb07-ySzH8lrP_jB3t_D0K-ZGlOO_SVILgLUngbwdGVkuFI39GVPZMQbcQ4nrwd6GnQvPfN7Oxl2uYWIPiZukLkG0OWRt8yCdSlei0TZE7PcK7cDutMLDHbQ3ZMCZx3nw8OZ2-pOlvwjPBVvlyX6Cg8icAHNw9fe-8nSFlGQe72gvuWEbf94Yy8iKxCQAugyxhT7FrFoxDNe6ocs9bejw',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBnL9ZFp4A2-V-zcnH2bJOUfYCvj_JeayXpHWVf_v_o3lT07VGPl33MHFb07-ySzH8lrP_jB3t_D0K-ZGlOO_SVILgLUngbwdGVkuFI39GVPZMQbcQ4nrwd6GnQvPfN7Oxl2uYWIPiZukLkG0OWRt8yCdSlei0TZE7PcK7cDutMLDHbQ3ZMCZx3nw8OZ2-pOlvwjPBVvlyX6Cg8icAHNw9fe-8nSFlGQe72gvuWEbf94Yy8iKxCQAugyxhT7FrFoxDNe6ocs9bejw',
  },
  {
    id: '7',
    title: '盗梦空间',
    year: '2010',
    genre: '科幻',
    rating: '9.3',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPIYr7ZKw5HD_j0w3FtRl_sOzoh2a3qkI4fHQpEneBu9JORlTaJ1AgSA3V_IEY4zPx6kq4o1ABuPQ5RPTDe29cXfyftLWarkk4a0VWo0KsxToITkebQ4QdSBXdmkKW15pXJgiETPVdhzdc46btLp_6Ib3inEZEbfBgWXzSB3hhB88EGXakuD5l7bGsFuI1pokafItW4a2di2_ZFWWliEMYYjQJMDNU7PkuQpRWmUxGo4LWsJDjoLi-HuE1ZKNWEAnxKBRSvPRwHU',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPIYr7ZKw5HD_j0w3FtRl_sOzoh2a3qkI4fHQpEneBu9JORlTaJ1AgSA3V_IEY4zPx6kq4o1ABuPQ5RPTDe29cXfyftLWarkk4a0VWo0KsxToITkebQ4QdSBXdmkKW15pXJgiETPVdhzdc46btLp_6Ib3inEZEbfBgWXzSB3hhB88EGXakuD5l7bGsFuI1pokafItW4a2di2_ZFWWliEMYYjQJMDNU7PkuQpRWmUxGo4LWsJDjoLi-HuE1ZKNWEAnxKBRSvPRwHU',
  },
  {
    id: '8',
    title: '阿凡达',
    year: '2009',
    genre: '科幻',
    rating: '8.9',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw',
  },
  {
    id: '9',
    title: '流浪地球2',
    year: '2023',
    genre: '科幻',
    rating: '8.2',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt2vm3DWR8-Rd-KuQiD3sGCo0BWHaYxAnr4oxuTnEca4OGjkx4RjLfulxvSCWw_mpm82DiXVvV4FdmGZCje8CZ6WvvJNVCoKzhxsSV9daWW--sJDNTjzJ6lSwUXlTxbgGyIgh7Nch8L44rQEeWtfEmwpRjXGen_PGJJUhyy72_2dblnbPZSpoqJDAwHGjgV5wZf_M9lv7Gnw-RQLKtVxwm3ocNoTuc475NTsqxQ82l8atjF4MbSFPmBDVUISzthiU96jP8VYKv5PU',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt2vm3DWR8-Rd-KuQiD3sGCo0BWHaYxAnr4oxuTnEca4OGjkx4RjLfulxvSCWw_mpm82DiXVvV4FdmGZCje8CZ6WvvJNVCoKzhxsSV9daWW--sJDNTjzJ6lSwUXlTxbgGyIgh7Nch8L44rQEeWtfEmwpRjXGen_PGJJUhyy72_2dblnbPZSpoqJDAwHGjgV5wZf_M9lv7Gnw-RQLKtVxwm3ocNoTuc475NTsqxQ82l8atjF4MbSFPmBDVUISzthiU96jP8VYKv5PU',
  },
  {
    id: '10',
    title: '三体',
    year: '2023',
    genre: '科幻',
    rating: '7.9',
    type: 'tv',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcUFQ6XhWm7AM1Hffu7ZtynTaP01bVNFKnhw_cVBmyog2aD4fFM3o6GHR06iml8LvVKpKOdVBBn0MliEUNX4mm6ywqISoZFPCdLDZX5EkjJhbqWXX6UPGg5gYX4m-DJM52sOiFyFe1jdUyiPZMEeaSXC27ZwIkVXQDqabNNYS-t-Th4N2b6zubNwVJbUUSdJZjU3xd48LDbBMtZDGlVSEQIMLtogR8omk-GNu0IBJqhEYpphQEq0UG1M4TdIzkhhP3_55Bb_ZMa5Y',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcUFQ6XhWm7AM1Hffu7ZtynTaP01bVNFKnhw_cVBmyog2aD4fFM3o6GHR06iml8LvVKpKOdVBBn0MliEUNX4mm6ywqISoZFPCdLDZX5EkjJhbqWXX6UPGg5gYX4m-DJM52sOiFyFe1jdUyiPZMEeaSXC27ZwIkVXQDqabNNYS-t-Th4N2b6zubNwVJbUUSdJZjU3xd48LDbBMtZDGlVSEQIMLtogR8omk-GNu0IBJqhEYpphQEq0UG1M4TdIzkhhP3_55Bb_ZMa5Y',
  },
  {
    id: '11',
    title: '超时空要塞',
    year: '2022',
    genre: '动漫',
    rating: '8.4',
    type: 'tv',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKjzVh6UF3ar1vZNo9d0h1Ed05wVFSF7JkfOzzBjU0WjDvtHB8ovTkiv7ebcIYMlUGdOOrT1MgGHwZsajq4C4ecRbfx-owJjQwAeFKBQLUhx45jPKv0LCRUW6MwxefZk7FpnTdhwDXvi9TbBxRRHWIzBzxFOamwHZaaonzmi7yNKqHe_ZsFSBpzhYAdp83E64th3d-Ism7n76zTfOnWMDjBgaxDcI2BN6FhoDuE5cMYP8eIC9FJirXtMyuOMJemrEkneL205wzHgE',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKjzVh6UF3ar1vZNo9d0h1Ed05wVFSF7JkfOzzBjU0WjDvtHB8ovTkiv7ebcIYMlUGdOOrT1MgGHwZsajq4C4ecRbfx-owJjQwAeFKBQLUhx45jPKv0LCRUW6MwxefZk7FpnTdhwDXvi9TbBxRRHWIzBzxFOamwHZaaonzmi7yNKqHe_ZsFSBpzhYAdp83E64th3d-Ism7n76zTfOnWMDjBgaxDcI2BN6FhoDuE5cMYP8eIC9FJirXtMyuOMJemrEkneL205wzHgE',
  },
  {
    id: '12',
    title: '肖申克的救赎',
    year: '1994',
    genre: '剧情',
    rating: '9.7',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBnL9ZFp4A2-V-zcnH2bJOUfYCvj_JeayXpHWVf_v_o3lT07VGPl33MHFb07-ySzH8lrP_jB3t_D0K-ZGlOO_SVILgLUngbwdGVkuFI39GVPZMQbcQ4nrwd6GnQvPfN7Oxl2uYWIPiZukLkG0OWRt8yCdSlei0TZE7PcK7cDutMLDHbQ3ZMCZx3nw8OZ2-pOlvwjPBVvlyX6Cg8icAHNw9fe-8nSFlGQe72gvuWEbf94Yy8iKxCQAugyxhT7FrFoxDNe6ocs9bejw',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBnL9ZFp4A2-V-zcnH2bJOUfYCvj_JeayXpHWVf_v_o3lT07VGPl33MHFb07-ySzH8lrP_jB3t_D0K-ZGlOO_SVILgLUngbwdGVkuFI39GVPZMQbcQ4nrwd6GnQvPfN7Oxl2uYWIPiZukLkG0OWRt8yCdSlei0TZE7PcK7cDutMLDHbQ3ZMCZx3nw8OZ2-pOlvwjPBVvlyX6Cg8icAHNw9fe-8nSFlGQe72gvuWEbf94Yy8iKxCQAugyxhT7FrFoxDNe6ocs9bejw',
  },
];

export const SEARCH_RESULTS = [
  ...POPULAR_MOVIES,
  {
    id: '7',
    title: '七根心简',
    year: '2024',
    genre: '悬疑 / 冒险',
    rating: '9.2',
    type: 'tv',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPIYr7ZKw5HD_j0w3FtRl_sOzoh2a3qkI4fHQpEneBu9JORlTaJ1AgSA3V_IEY4zPx6kq4o1ABuPQ5RPTDe29cXfyftLWarkk4a0VWo0KsxToITkebQ4QdSBXdmkKW15pXJgiETPVdhzdc46btLp_6Ib3inEZEbfBgWXzSB3hhB88EGXakuD5l7bGsFuI1pokafItW4a2di2_ZFWWliEMYYjQJMDNU7PkuQpRWmUxGo4LWsJDjoLi-HuE1ZKNWEAnxKBRSvPRwHU',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJPIYr7ZKw5HD_j0w3FtRl_sOzoh2a3qkI4fHQpEneBu9JORlTaJ1AgSA3V_IEY4zPx6kq4o1ABuPQ5RPTDe29cXfyftLWarkk4a0VWo0KsxToITkebQ4QdSBXdmkKW15pXJgiETPVdhzdc46btLp_6Ib3inEZEbfBgWXzSB3hhB88EGXakuD5l7bGsFuI1pokafItW4a2di2_ZFWWliEMYYjQJMDNU7PkuQpRWmUxGo4LWsJDjoLi-HuE1ZKNWEAnxKBRSvPRwHU',
  },
  {
    id: '8',
    title: '心简传说',
    year: '2022',
    genre: '奇幻',
    rating: '8.7',
    type: 'movie',
    poster: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw',
    backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4KQeowxLbfQhk3bmqqcw_sj8dxuCDBr_NIZZjrU8XAre9PErv5vY772ky6MM-lbNdCWrLmUmQnxXMofZSt0RFtU1mSvugBOCzQ_ffDDEq4DNHJrwh_uTIdlOyxQ8QEkpVv4KrO7RwehPkIuYO5lzLl7MyA2EOOtz_MFzXxlL253QUPB0WVq1ypcb73xEAfsXhoRuQ-Nz2WCcFRSA6uEAebBs3hAhx8CTNsYjvA8g_mvxz_A3Ks0Y7CvXkhNhvaM3q-SXq_ckP9zw',
  }
];

export const DEFAULT_VIDEO_SOURCES = [
  { id: '1', name: 'chicken', url: 'https://api.xjzyapi.xyz/provide/vod', enabled: false, type: 'video' },
  { id: '2', name: 'ckzy', url: 'https://ckzy.me/api.php/provide/vod/', enabled: false, type: 'video' },
  { id: '3', name: 'xzybb1', url: 'https://xzybb1.com/api.php/provide/vod/', enabled: false, type: 'video' },
  { id: '4', name: 'moviecn', url: 'http://caiji.dyttzyapi.com/api.php/provide/vod', enabled: true, type: 'video' },
];

export const DEFAULT_DANMAKU_SOURCES = [
  { id: 'd1', name: 'Bilibili Danmaku API', url: 'https://api.bilibili.com/x/v1/dm/list.so', enabled: true, type: 'danmaku' },
  { id: 'd2', name: 'Dplayer Official', url: 'https://api.prprpr.me/dplayer/v3/', enabled: false, type: 'danmaku' },
];
