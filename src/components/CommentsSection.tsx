export const CommentsSection = ({ recipeComments }: any) => {
  if (recipeComments.length === 0) return null;

  return (
    <div>
      <p>{"commments: "}</p>
      {recipeComments.map((comment: any) => (
        <p>{comment.comment}</p>
      ))}
    </div>
  );
};
