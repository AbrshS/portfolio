interface BlogPost {
  date: string;
  title: string;
  tag: string;
  tagColor: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    { date: '14 APR 2023', title: 'Creating portfolio website', tag: 'Design', tagColor: 'bg-green-200' },
    { date: '22 MAR 2023', title: 'Reliving marine sounds', tag: 'Music', tagColor: 'bg-green-200' },
    { date: '09 FEB 2023', title: 'Why you need daily routine', tag: 'Lifestyle', tagColor: 'bg-green-200' },
    { date: '18 JAN 2023', title: 'Hey! Sandwiches are cool', tag: 'Food', tagColor: 'bg-green-200' },
    { date: '05 JAN 2023', title: 'Color theory in design', tag: 'Art', tagColor: 'bg-green-200' },
  ];

  return (
    <section className="py-12 px-6 md:px-12">
      <h3 className="text-sm uppercase font-medium mb-6">BLOG</h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
            <div>
              <p className="text-xs text-gray-500">{post.date}</p>
              <h4 className="text-base font-medium">{post.title}</h4>
            </div>
            <span className={`${post.tagColor} px-3 py-1 text-xs rounded-full`}>
              {post.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}